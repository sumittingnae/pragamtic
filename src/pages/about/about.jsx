import React from 'react';
import Header from '../../component/header/header';
import './about.scss';

 function about (){

    return(

        <>
        <Header/>
       
       <div className="getAbout">
        <div className="container">
            <div className='col-12'>
                <div className="d-flex w-100 col-lg-5">
                    <div className='wrappe'>
                        <h5>About</h5>
                        <div className='content'>
                           <div>
                             <img src="./ceo2.png" alt="" />
                           </div>
                           <div className='info'>
                            <h6>Harry Jones</h6>
                            <span>CEO,Prangmanti Infotech Pvt Ltd</span>
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
export default about;