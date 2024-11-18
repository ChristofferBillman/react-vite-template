import { useEffect, RefObject } from 'react'

export default function useOutsideClick(
	onClick: () => void,
	refs: RefObject<HTMLElement>[])
{
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const clickedOutside = refs.every(ref => ref.current && !ref.current.contains(e.target as Node))
			if (clickedOutside) {
				onClick()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [refs, onClick])
}