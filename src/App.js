import './scss/style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';

//fragment: 복수개의 컴포턴트를 wrapping tag로 감싸지 않고 그룹화 시켜서 내보낼Eo - <>사용
//jsx는 한번에 하나의 컴포넌트만 return가능
//jsx 안쪽에는 일반 주석을 쓸수 없고 주석을 {}로 감싸서 적용
//jsx 안쪽에서 연산이 필요한 구문은 무조건 {}감싸서 표현
//jsx 안쪽에서는 제한적인 연산만 가능(변수치환, 삼항연산, map반복처리, 이벤트 연결)
//jsx로 반복적인 요소를 내보낼대에는 고유값으로 key값 부여
function App() {
	return (
		<>
			{/* hearder */}
			<Header />
			<Section />
			<Footer />
		</>
	);
}

export default App;
