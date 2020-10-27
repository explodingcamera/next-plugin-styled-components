import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>{this.props.headTags}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
