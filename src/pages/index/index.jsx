import {Component} from 'react';
import { View, Swiper, SwiperItem, Text } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import './index.scss';

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      tabsType:[{title:'新概念一',id:'00'},{title:'书虫',id:'01'},{title:'美国亲子英语',id:'02'}],
      currentTab:'00',
      swiperConfig: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff'
      }

    }

  }

  handleChangeTab = (value) => {
    this.setState({
      currentTab:value
    })
  }

  render() {
    return (
      <View className='container'>
        <View className='header-title'>
          <Text className='header-title-text'>文小迪的自习室</Text>
        </View>
        <View className='page-body'>
          <View className='page-section page-section-spacing swiper'>
            <Swiper {...this.state.swiperConfig}>
              {
                this.state.background.map((item, index) => (
                  <SwiperItem key={`swiper_${index}`}>
                    <View className={`swiper-item ${item}`}>{index}</View>
                  </SwiperItem>
                ))
              }
            </Swiper>
          </View>
        </View>
        <View>
          <AtTabs current={this.state.currentTab} tabList={this.state.tabsType} onClick={this.handleChangeTab}>
            {
              this.state.tabsType.map(item => (
                <AtTabsPane  current={this.state.currentTab} key={`tab_${item.id}`} index={item.id}>
                  <View>{item.title}</View>
                </AtTabsPane>
              ))
            }
          </AtTabs>
        </View>
      </View>
    )
  }
}
