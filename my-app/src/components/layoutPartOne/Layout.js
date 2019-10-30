import React from 'react';
import Text from './layoutComponents/text/Text';
import Image from './layoutComponents/image/Image';
import './Layout.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptatem, fugiat magnam dicta quaerat expedita optio quasi quibusdam. Error accusamus animi, consequatur quis sint iusto, harum a eveniet. Quos, recusandae. ';

const Layout = () => {

    return (
        <div>

            <div className='section wrapReverse'>
                <Image className='spaceImg' imageURL = {'https://i.vimeocdn.com/video/595198868_505x160.jpg'}/>
                <div className='space'/>
                <Text className='element' title = {'MONSOON III'} description = {lorem}/>
            </div>
    
            <div className='gradient'>
                <div className='section wrap'>
                <Text className='spaceText' title = {'BEAMS'} description = {lorem}/>
                <div className='space'/>
                <Image className='element' imageURL = {'https://i.vimeocdn.com/video/589972810_530x315.jpg'}/>
                </div>
                
                <div className='section wrapReverse'>
                <Image className='spaceImg' imageURL = {'https://i.vimeocdn.com/video/590587169_530x315.jpg'}/>
                <div className='space'/>
                <Text className='element' title = {'Move 2'} description = {lorem}/>
                </div>
            </div>

        </div>
    );
}

export default Layout;