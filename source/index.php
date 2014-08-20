<!--
oops.. no doctype
<!DOCTYPE html>
-->
<html>
	<head>
		<title>php2html / htmlhint test</title>
	</head>

	<body>

		<h1>Testing grunt-php2html htmlhint errors</h1>

		<P>upper case &lt;P&gt; tags around this string.</P>

		<p TITLE="TITLE!">upper case TITLE ATTRIBUTE on this one</p>

		<p title=un-quoted-title-value>un-quoted title value</p>

		<h2>test list without closing li tags</h2>
		<ul>
			<li>List item 1
			<li>List item 2
			<li>List item 3
		</ul>

	</body>
</html>