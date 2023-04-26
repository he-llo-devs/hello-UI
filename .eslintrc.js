module.exports = {
	"extends": "next/core-web-vitals",
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error", 
			(require("os").EOL === "\r\n" ? "windows" : "unix")
		],
		"semi": [
			"error",
			"always"
		]
	}
};
