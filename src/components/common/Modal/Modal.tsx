import { Dispatch, RefObject, SetStateAction, useRef } from 'react'

import TransitionLifecycle from '../TransitionLifecycle'

import useOutsideClick from '../../../hooks/useOutsideClick'
import useScaledBackground from './useScaledBackground'

import css from './Modal.module.css'

interface Props {
	visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    children: JSX.Element | JSX.Element[]
	className?: string
	bgRef?: RefObject<HTMLDivElement>
}

const initial = {
	opacity: 0,
	transform: 'translate(-50%, -50%) scale(1.2)',
}

const transition = {
	opacity: 1,
	transform: 'translate(-50%, -50%) scale(1)',
}

const exit = {
	opacity: 0,
	transform: 'translate(-50%, -50%) scale(1.2)',
}

export function Modal({ visible, setVisible, children, bgRef, className}: Props) {

	const ref = useRef<HTMLDivElement>(null)

	useOutsideClick(() => setVisible(false), [ref])
	useScaledBackground(0.1, visible, bgRef)

	return (
		<TransitionLifecycle
			willRender={visible}
			transition={{ initial, transition, exit, duration: 500}}
			ref={ref}
			className={css.modal}
		>
			<div className={className}>
				{children}
			</div>
		</TransitionLifecycle>
	)
}