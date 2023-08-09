import Elem from "./Elem";

interface Props {
	map: string[][];
}
const DrowMap = ({ map }:Props) => {
    return (
        <>
        
        {map!=undefined && (map.map((el,index) => (
              <Elem key={index} element={el} />
          )))}
      </>
    );
};
export default DrowMap
