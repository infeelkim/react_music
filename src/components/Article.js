import React from 'react';

//public 폴더까지의 절대 경로값
const path = process.env.PUBLIC_URL;

function Article({ data }) {
	// console.log(props);
	return (
		<article>
			<h2>{data}</h2>
			{/* 퍼블릭 폴더까지의 절대경로를 불러와서 그뒤에 props로 전달받은 이미지명을 이용해 이미지 소소  url 완성 */}
			<img src={`${path}/img/${data}.jpg`} />
		</article>
	);
}

export default Article;
