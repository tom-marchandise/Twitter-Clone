import Searchbar from './searchbar.jsx'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Infos from './infos.jsx'
import Followsuggest from './followsuggest.jsx'

function Footer () {
  return <div role="contentinfo" className="w-[35%] flex flex-col right-0 top-0 sticky h-fit">
        <div className={'pl-6 w-[60%]'}>
            <Searchbar/>
            <div className={'mt-4 flex flex-col bg-gray-100 rounded-lg'}>
                <h2 className={'m-2 font-bold'}>Who to follow</h2>
                <div className={'flex flex-col'}>
                    <Followsuggest/>
                    <Followsuggest/>
                    <Followsuggest/>
                    <div className={'h-10 flex items-center hover:bg-gray-200'}>
                        <span className={'m-6 text-sky-400 text-sm'}>Show more</span>
                    </div>
                </div>
            </div>
            <div className={'m-3'}>
                <Infos href={'https://twitter.com/tos'} text={'Terms of Service'}/>
                <Infos href={'https://twitter.com/privacy'} text={'Privacy Policy'}/>
                <Infos href={'https://support.twitter.com/articles/20170514'} text={'Cookie Policy'}/>
                <Infos href={'https://help.twitter.com/resources/accessibility'} text={'Accessibility'}/>
                <Infos href={'https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?' +
                    'ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo'}
                       text={'Ads info'}/>
                <Infos href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} text={'More...'}/>
                <span className={'m-4 text-xs text-gray-600'}>&#xA9; 2024 Marchandise-zeibatsu.</span>
            </div>
        </div>
    </div>
}

export default Footer
