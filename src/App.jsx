/* eslint-disable react/no-unescaped-entities */
import './App.css';
import { angelaGray, annaKim, jacobThompson, kimberlySmith, markWebber, nathanPeterson, rizkyHassanuddin, imageChess } from "./assets/images/index";
import { GoDotFill } from "react-icons/go";
function App() {

  return (
    <>
      <div className="h-full md:h-screen bg-Light-grayish-blue-1 flex justify-center items-center">
        <div className="flex flex-col w-full md:w-[600px] bg-White p-4 rounded-none md:rounded-xl shadow-2xl">
          {/* top feed */}
          <div className="flex flex-row justify-between items-center mb-3">
            <div className="flex flex-row items-center gap-3">
              <h3 className="text-Very-dark-blue font-semibold text-2xl">Notifications</h3>
              <span className="bg-Blue text-White px-2 py-1 text-xs rounded-md font-Jakarta font-semibold">3</span>
            </div>
            <p className="text-sm text-Dark-grayish-blue hover:text-Blue cursor-pointer">Mark all as read</p>
          </div>
          <div className="flex flex-col gap-3">
            {/* id 1 */}
            <div className="flex flex-row bg-Very-light-grayish-blue px-3 py-2 rounded-lg gap-3">
              <img src={markWebber} alt="mark webber" loading="lazy" className="w-[50px] h-[50px]" />
              <div className="flex flex-col gap-2 relative">
                <div className="flex flex-row borde w-fit">
                  <p className="text-sm text-Dark-grayish-blue inline"><span className="text-Very-dark-blue font-bold text-base cursor-pointer hover:text-Blue">Mark Webber </span> reacted to your recent post <span className="text-Dark-grayish-blue font-semibold text-sm cursor-pointer hover:text-Blue">My first tournament today!</span><GoDotFill className="text-Red inline-block" size={12} /></p>
                </div>
                <span className="text-Grayish-blue text-xs">1m ago</span>
              </div>
            </div>
            {/* id 2 */}
            <div className="flex flex-row bg-Very-light-grayish-blue px-3 py-2 rounded-lg gap-3">
              <img src={angelaGray} alt="angela gray webber" loading="lazy" className="w-[50px] h-[50px]" />
              <div className="flex flex-col gap-2 relative">
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-Dark-grayish-blue p-after"><span className="text-Very-dark-blue font-bold text-base cursor-pointer hover:text-Blue">Angela Gray </span> followed you <GoDotFill className="text-Red inline-block" size={12} /></p>
                </div>
                <span className="text-Grayish-blue text-xs">5m ago</span>
              </div>
            </div>
            {/* id 3 */}
            <div className="flex flex-row bg-Very-light-grayish-blue px-3 py-2 rounded-lg gap-3">
              <img src={jacobThompson} alt="jacob thompson" loading="lazy" className="w-[50px] h-[50px]" />
              <div className="flex flex-col gap-2 relative">
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-Dark-grayish-blue p-after"><span className="text-Very-dark-blue font-bold text-base cursor-pointer hover:text-Blue">Jacob Thompson </span> has joined your group <span className="text-Blue font-semibold cursor-pointer hover:text-Blue">Chess Club</span><GoDotFill className="text-Red mb-[2px] ml-1 inline-block" size={12} /></p>
                </div>
                <span className="text-Grayish-blue text-xs"> 1 day ago</span>
              </div>
            </div>
            {/* id 4 */}
            <div className="flex flex-row px-3 py-2 rounded-lg gap-3">
              <img src={rizkyHassanuddin} alt="rizky hassanuddin" loading="lazy" className="w-[50px] h-[50px]" />
              <div className="flex flex-col relative">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-1">
                    <p className="text-sm text-Dark-grayish-blue p-after"><span className="text-Very-dark-blue font-bold text-base cursor-pointer hover:text-Blue">Rizky Hasanuddin </span> sent you a private message</p>
                  </div>
                  <span className="text-Grayish-blue text-xs">5 days ago</span>
                </div>
                <p className="text-Dark-grayish-blue text-sm border border-Very-light-grayish-blue shadow p-3 rounded-md mt-3 cursor-pointer  hover:bg-Very-light-grayish-blue">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                  I'm already having lots of fun and improving my game.</p>
              </div>
            </div>
            {/* id 5 */}
            <div className="flex flex-row justify-between px-3 py-2 rounded-lg">
              <div className="flex flex-row gap-3">
                <img src={kimberlySmith} alt="kimber smith" loading="lazy" className="w-[50px] h-[50px]" />
                <div className="flex flex-col gap-2 relative">
                  <div className="flex flex-row gap-1">
                    <p className="text-sm text-Dark-grayish-blue p-after"><span className="text-Very-dark-blue font-bold text-base cursor-pointer hover:text-Blue">Rizky Hasanuddin </span> commented on your picture</p>
                  </div>
                  <span className="text-Grayish-blue text-xs">1 week ago</span>
                </div>
              </div>
              <img src={imageChess} alt="chess" loading="lazy" className="w-[50px] h-[50px] cursor-pointer border-blue rounded-lg" />
            </div>
            {/* id 6 */}
            <div className="flex flex-row px-3 py-2 rounded-lg gap-3">
              <img src={nathanPeterson} alt="nathan peterson" loading="lazy" className="w-[50px] h-[50px]" />
              <div className="flex flex-col gap-2 relative">
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-Dark-grayish-blue p-after"><span className="text-Very-dark-blue font-bold text-base cursor-pointer hover:text-Blue">Nathan Peterson </span> reacted to your recent post <span className="text-Dark-grayish-blue font-semibold text-sm cursor-pointer hover:text-Blue">5 end-game stratergies to increase win rate </span></p>
                  {/* <GoDotFill className="text-Red mt-[5px]" size={12} /> */}
                </div>
                <span className="text-Grayish-blue text-xs">2 weeks ago</span>
              </div>
            </div>
            {/* id 7 */}
            <div className="flex flex-row px-3 py-2 rounded-lg gap-3">
              <img src={annaKim} alt="anna kim" loading="lazy" className="w-[50px] h-[50px]" />
              <div className="flex flex-col gap-2 relative">
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-Dark-grayish-blue p-after"><span className="text-Very-dark-blue font-bold text-base cursor-pointer hover:text-Blue">Anna Kim </span> left the group <span className="font-semibold cursor-pointer hover:text-Blue">Chess Club</span></p>
                </div>
                <span className="text-Grayish-blue text-xs"> 2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* attribution */}
      < div className="attribution text-[11px] text-center" >
        Challenge by < a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blueC" > Frontend Mentor</a >.
        Coded by < a href="https://devemma.netlify.app/" target="_blank" className="text-blueC" > Emmanuel Tofunmi</a >.
      </div >
    </>
  )
}

export default App
