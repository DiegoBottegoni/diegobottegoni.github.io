import { motion, useSpring } from "motion/react"
import { useEffect, useState } from "react"

const spring = { damping: 90, stiffness: 5000, restDelta: 0.001 }

export default function Drag() {
    const [initialPos, setInitialPos] = useState<{ x: number; y: number } | null>(null)
    const [isVisible, setIsVisible] = useState(true)

    const x = useSpring(initialPos ? initialPos.x : 0, spring)
    const y = useSpring(initialPos ? initialPos.y : 0, spring)

    useEffect(() => {
        const handlePointerMove = (event: MouseEvent) => {
            if (!initialPos) {
                setInitialPos({ x: event.clientX, y: event.clientY })
            }
            x.set(event.clientX)
            y.set(event.clientY)
            setIsVisible(true)
        }

        const handleMouseOut = (event: MouseEvent) => {
            // Si relatedTarget es null, el mouse salió de la ventana del navegador
            if (!event.relatedTarget) {
                setIsVisible(false)
            }
        }

        const handleMouseEnter = () => {
            setIsVisible(true)
        }

        window.addEventListener("pointermove", handlePointerMove)
        window.addEventListener("mouseout", handleMouseOut)
        window.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
            window.removeEventListener("mouseout", handleMouseOut)
            window.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [x, y, initialPos])

    return (
        <>
            <style>{`* { cursor: none !important; }`}</style>

            {isVisible && (
                <motion.div
                    className="hidden md:block"
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
