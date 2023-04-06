import React from 'react';
import Header from '../../component/header/header';
import './Idea.scss'

export default function Idea (){

    return(

    <>
    <Header/>
    <div className="getIdea">
        <div className="container">
            <div className='col-12'>
                <div className="d-flex w-100 col-lg-5">
                    <div className='wrappe'>
                        <h5>Idea!</h5>
                        <div className='content'>
                           <div>
                             <img src="./Thinking.png" alt="" />
                           </div>
                           <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce at gravida arcu. Fusce nec faucibus leo, eu efficitur massa. 
                                Nulla facilisi. Nulla hendrerit pellentesque quam. 
                                Aliquam posuere interdum nisi, varius euismod metus egestas vel. 
                                Sed pharetra venenatis libero, eget commodo est finibus a. 
                                Praesent ullamcorper
                                 ex non lacinia feugiat. Nunc ultrices a mauris pretium sagittis. </p>
                            </div>


                        </div>


                    </div>
                </div>

            </div>
        </div>
    
    </div> 
    </>

    )

}