import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

export default class Test extends React.Component {

  componentWillMount() {
    this.setState({
      children: [],
      pics:[{
          id:1,
          src:"https://c0.wallpaperflare.com/preview/555/750/365/blurred-background-brewed-coffee-brown-caffeine.jpg"
      },
      {
          id:2,
          src:"https://media.consumeraffairs.com/files/news/Hot_cup_of_coffee_or_tea_Alina_Rosanova_Getty_Images.jpg"
      },
      {
          id:3,
          src:"https://s11.favim.com/orig/7/768/7687/76870/ice-cream-summer-Favim.com-7687091.jpg"
      },{
        id:4,
        src:"https://c0.wallpaperflare.com/preview/555/750/365/blurred-background-brewed-coffee-brown-caffeine.jpg"
    }
    ],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(this.state.pics),
      })
    }, 100);
  }

  createChildren = pics => pics.map(pic => <div key={pic.id} style={{ height: 400, background: '#333', paddingLeft:'20' }}><img src={pic.src} /></div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

        // Carousel configurations
        numberOfCards={2}
        gutter={30}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={true}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={30}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );  
  }
} 