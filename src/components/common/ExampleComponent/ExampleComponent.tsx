import css from './ExampleComponent.module.css'

export function ExampleComponent() {
	return (
		<div className={css.container}>
			<p className={css.text}> React + TS + Vite + CSS modules </p>
		</div>
	)
}
