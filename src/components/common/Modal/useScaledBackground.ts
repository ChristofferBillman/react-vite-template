import { useCallback, useLayoutEffect, RefObject } from 'react'

export default function useScaledBackground(
	scaleFactor: number,
	visible: boolean,
	bgRef?: RefObject<HTMLElement>)
{
	const scaleBody = useCallback((scale: number) => {
		if(bgRef && bgRef.current) {
			bgRef.current.style.transitionDuration = '500ms'
			bgRef.current.style.transform = `scale(${scale})`
		}
	}, [bgRef])

	useLayoutEffect(() => {
		if(visible) scaleBody(1 + scaleFactor)
		else scaleBody(1)
	},[visible, scaleBody, scaleFactor])
}