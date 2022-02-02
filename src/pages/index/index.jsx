import { Component } from 'react';
import { View, Swiper, SwiperItem, Text } from '@tarojs/components';
import {Tabs} from 'antd';
// import { AtTabs, AtTabsPane } from 'taro-ui';
import './index.scss';

const { TabPane } = Tabs;

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      tabsType:[
        {
          id:0,
          data:'新概念一'
        },
        {
          id:1,
          data:'书虫'
        },
        {
          id:2,
          data:'美国亲子英语'
        }
      ],
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

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


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
          <Tabs defaultActiveKey='0' >
            {
              this.state.tabsType.map(item => (
                <TabPane tab={item.data} key={item.id}>
                  <View>{item.data}</View>
                </TabPane>
              ))
            }
          </Tabs>
        </View>
      </View>
    )
  }
}
