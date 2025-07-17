
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion(props) {
    const [startindex, setindex] = useState(null)
    const list = props.items

    return (<div>   <h1>Accordion</h1> {list.map((el, index) => (
        <div className="accordion">
            <div>
                <button onClick={() => setindex(index == startindex ? null : index)} className="accordion-title">{el.title}
                    <span style={{ float: "right" }}>{index == startindex ? <FaChevronUp /> : <FaChevronDown />}</span>
                </button>
            </div>
            {index == startindex && <div className="accordion-content">
                <p>{el.content}</p>
            </div>}
        </div>
    ))}
    </div>
    );
}

export default Accordion;
