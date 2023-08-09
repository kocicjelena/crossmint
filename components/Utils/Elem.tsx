interface Props {
	element: string[];
}
const Elem = ({ element }:Props) => {
    return (
        <>
       <li>
         {element.map((el: any,index: any) => (
         `${el}`
        ))}
        </li>
        </>
    );
};
export default Elem
