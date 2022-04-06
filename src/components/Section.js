import React from 'react';
import Article from './Article';

/*
	단방향 데이터 바인딩
	- 부모컴포넌트에서 자식 컴포넌트로 데이터를 전달 가능
	- 부모에서 자식요소로 데이터를 전달할때는 prop을 통해서 전달
*/
/*
구조분해 할당
비구조화 할당
destructuring assignment

// 각 배열의 데이터를 구조분해 할당을 이용해서  원하는 변수명으로 한번에 할당
const fruit = ['apple', 'strawberry', 'melon'];
const [a, b, c] = fruit;

const a = fruit[0];
const b = fruit[1];
const c = fruit[2];

const student = {
	name: '홍길동',
	age: 20,
	isFemale: false,
};

const { name } = student;
console.log(name);
*/

//hook : 컴포넌트 안쪽에 다양한 기능을 도와주는 모듈
//useState : 컴포넌트의 랜더링에 관여하는 중요한 정보값을 관리해주는 hook
/*
	전개연산자 (Spread Operator)
	-참조형 자료를 완전 복사 (deep copy) : 배열, 객체 등
	-원시형 자료 : 값이 있는것

	변수에 배열이나 객체같은 참조형 자료를 할당하면
	해당 변수에는 실제 값이 할당되는것이 아닌 해당 값이 위치해있는 주소값이 참조
*/

/*
//원시형 자료는 실제 해당 값이 변수에 할당되므로 같다고 출력
const a = 'apple'; //원시형자료
const b = 'apple'; //원시형자료
console.log(a === b); //true

//해당 배열의 값이 변수에 할당되는것이 아닌 서로다른 참조 주소가 할당되므로
//아래 두값을 비교하면 다르다는 결과값이 출력
const arr1 = ['red', 'green', 'blue'];
const arr2 = ['red', 'green', 'blue'];
console.log(arr1 === arr2); //false

//배열을 생성하고
let fruit = ['apple', 'mango', 'melon'];
//해당배열을 새로운 배열로 옮겨담음
let newFruit = fruit; //배열값의 참조 주소를 전달하기때문 아래결과 도출
//복사된 배열의 첫번재 값을 변경
newFruit[0] = 'orange';
//복사된 배열값 출력 : 변경된값 출력
console.log(newFruit);
//변경하지 않은 원래 배열값도 같이 변경된 것을 확인
console.log(fruit);

//불변성
//참조형 자룔르 복사할때는 원본데이트와 비교할 수 있도록 무조건 deep Copy

let fruit = ['apple', 'mango', 'melon'];
//전기연산자로 기존 참조값을 doop copy 한 다음에 = ...
let newFruit = [...fruit];
//완전복사된 값을 변경하면
newFruit[0] = 'orange';
console.log(newFruit);
//원본값에는 영향을 미치지 않음 = 불변성
console.log(fruit);
*/

function Section() {
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
	];
	return (
		<section>
			{arr.map((data, idx) => {
				//부모요소에서 자식 컴포넌트로 prop을 통해서 특정 데이터 전달 가능
				return <Article key={idx} data={data} index={idx} />;
			})}
		</section>
	);
}

export default Section;
