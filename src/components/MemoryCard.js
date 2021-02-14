import react from "react";
import './MemoryCard.css';



class MemoryCard extends react.Component{
constructor() {
    super()
    this.state = {isFlipped: false}
}


    clickHandler = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render(){
        let innerClass = ``

        if (this.state.isFlipped === true) {
            innerClass = 'MemoryCard_inner flipped'
        }else{
            innerClass = 'MemoryCard_inner'
        }
        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={innerClass}>
                    <div className="MemoryCard_back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="logo"/>
                    </div>
                    <div className="MemoryCard_front">∆</div>
                </div>    
            </div>
        )
    }
}

export default MemoryCard