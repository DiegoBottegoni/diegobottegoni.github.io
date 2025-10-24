import { motion, useSpring } from "motion/react"
import { useEffect, useState } from "react"

const spring = { damping: 90, stiffness: 5000, restDelta: 0.001 }

export default function Drag() {
    const [initialPos, setInitialPos] = useState<{ x: number; y: number } | null>(null)
    const [isVisible, setIsVisible] = useState(true)
    const [isDesktop, setIsDesktop] = useState(false)
    const x = useSpring(initialPos ? initialPos.x : 0, spring)
    const y = useSpring(initialPos ? initialPos.y : 0, spring)

    // Detect desktop
    useEffect(() => {
        let timeout: number
        const checkDesktop = () => {
            clearTimeout(timeout)
            timeout = window.setTimeout(() => {
                setIsDesktop(window.innerWidth >= 640)
            }, 100) // evita parpadeos al hacer resize
        }

        checkDesktop()
        window.addEventListener("resize", checkDesktop)
        return () => {
            clearTimeout(timeout)
            window.removeEventListener("resize", checkDesktop)
        }
    }, [])

    // Manejo del movimiento del puntero
    useEffect(() => {
        const handlePointerMove = (event: MouseEvent) => {
            if (!initialPos) setInitialPos({ x: event.clientX, y: event.clientY })
            x.set(event.clientX)
            y.set(event.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseLeaveWindow = (event: MouseEvent) => {
            if (!event.relatedTarget && event.clientY <= 0) setIsVisible(false)
        }

        window.addEventListener("pointermove", handlePointerMove)
        window.addEventListener("mouseleave", handleMouseLeaveWindow)

        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
            window.removeEventListener("mouseleave", handleMouseLeaveWindow)
        }
    }, [x, y, initialPos, isVisible])

    // Controla la visibilidad del cursor real de forma global
    useEffect(() => {
        const html = document.documentElement
        if (isDesktop && isVisible) {
            html.classList.add("cursor-none")
        } else {
            html.classList.remove("cursor-none")
        }
    }, [isDesktop, isVisible])

    return (
        <>
            <style>{`
        html.cursor-none, 
        html.cursor-none body, 
        html.cursor-none body * {
          cursor: none !important;
        }
      `}</style>

            {isVisible && isDesktop && (
                <motion.div
                    style={{
                        position: "fixed",
                        top: y,
                        left: x,
                        width: 35,
                        height: 35,
                        borderRadius: "50%",
                        backgroundColor: "#6B7280",
                        pointerEvents: "none",
                        translateX: "-50%",
                        translateY: "-50%",
                        zIndex: 9999,
                    }}
                />
            )}
        </>
    )
}
