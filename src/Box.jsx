import { useRef, useState, useMemo } from "react"
import { useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'



export default function Box(props) {

    const ref = useRef()
    const [hovered, setHover] = useState(false)
    const [rotate, setRotate] = useState(false)

    const geometry = useMemo(() => new THREE.BoxGeometry(), [])

    useEffect(() => {
        console.log(ref.current.geometry.uuid)
    })

    useFrame((_, delta) => {
        if (rotate) {
            ref.current.rotation.x += 1 * delta
            ref.current.rotation.y += 0.5 * delta
        }
    })

    return (
        <>
            <mesh{...props}
                ref={ref}
                scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
                onPointerDown={() => setRotate(!rotate)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                geometry={geometry}
            >

                <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
            </mesh>
        </>
    )
}