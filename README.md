# TS + React Template

This is my template of a React app, using Vite, TS, React and CSS modules.

## Linting
Eslint is used for linting. Instead of pulling in a tool like prettier for formatting, ESLint Stylistic is being used. This is mainly to keep complexity down - formatting and linting is all done through eslint.

NOTE: 
This must be added to your settings.json in vscode to get warnings and errors from eslint. It also fixes linting errors on save.
```
	"editor.formatOnSave": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit"
	}
```

## Styling
I tried a few different options at first. I wanted to try a CSS-in-JS solution for once, so I looked at Emotion and styled componenets. Emotion mucked up the component tree so much (really ugly, and makes debugging harder). These also applied styles at runtime instead of at compiletime, which felt unessecary and less performant.

Therefore, I chose to go with CSS-modules, since it has most of the benefits (scoped styles, good-enough encapsulation) of CSS-in-JS without the drawbacks (performance, DX).

## File structure
Componenets go in their own directory. Everything related to the componenent e.g. tests, styles, hooks, reducers etc. go in there. If there are lots of styles related to a component, they can be broken out into their own .ts file.

## Included components
In components/common, are a few components that I regularly use in most of my projects.

### Icon
Icon components uses Google's Material Symbols (Rounded), as a font. Browse icons here: https://fonts.google.com/icons.

### TransitionLifecycle
Allows mount/unmount to be transitioned. Would like to extend it to make it possible to pass CSS-classnames instead of inline styles as the transition prop.

### Modal
Centers its children in the viewport and handles mount/unmount.

