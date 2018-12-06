import React from 'react';
import '../styles/Card.css';

class Card extends React.Component {

   render() {
       var style = {
           backgroundImage: 'url(' + this.props.details.url + ')',
       };

       return (
           <article className="Card">
               <header style={style} className="card-header"> </header>
               <div className="card-body">
                 <h2 className="title">{this.props.details.name}</h2>
                 <div class="ui star rating" role="radiogroup">
                  <i aria-checked="false" aria-posinset="1" aria-setsize="4" class="active icon" tabindex="0" role="radio"></i>
                  <i aria-checked="false" aria-posinset="2" aria-setsize="4" class="active icon" tabindex="0" role="radio"></i>
                  <i aria-checked="true" aria-posinset="3" aria-setsize="4" class="active icon" tabindex="0" role="radio"></i>
                  <i aria-checked="false" aria-posinset="4" aria-setsize="4" class="icon" tabindex="0" role="radio"></i>
                </div>
               </div>

           </article>
       );
   }
}

export default Card;
