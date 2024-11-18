import clsx from 'clsx'

import style from './Icon.module.css'

interface Props {
	name: string
	size?: string
	color?: string
	className?: string
}

export function Icon({name, className}: Props) {
	return (
		<span
            className={clsx('material-symbols-rounded', style.icon, className)}
        >
            {name}
        </span>
	)
}