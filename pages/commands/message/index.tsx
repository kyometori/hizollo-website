import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '@/styles/Commands.module.css';
import { TableHeader } from '@/components/commandTableHeader';
import { MessageCommand, CommandInfo } from '@/components/commandInfo';
import Header from '@/components/head';

const MessageCommands: NextPage = () => {
  return <>
    <Header
      title = "訊息指令列表"
      description = "這是 HiZollo 的訊息指令列表，你可以在這裡找到 HiZollo 全部的訊息指令名稱以及相關說明"
    />
    <h1>HiZollo 的訊息指令列表</h1>
    <strong>訊息指令</strong>｜<Link href="/commands/slash">斜線指令</Link><br />
    這個指令列表能用 <MessageCommand cmd="help" /> 取得，且能使用 <MessageCommand cmd="help [指令名稱]" /> 獲得更詳細的說明。
    <InfoTable />
    <hr />
    <FunctionTable />
    <hr />
    <EntertainTable />
    <hr />
    <SingleGameTable />
    <hr />
    <MultiGameTable />
    <hr />
    <CommandGroupTable />
    <hr />
    <NetworkTable />
    <hr />
    <ContactTable />
    <hr />
    <MiscellaneousTable />
  </>;
}

function InfoTable () {
  return (
    <>
      <h2>資訊</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "announcement"
            aliases = {['ann']}
            description = "閱讀官方公告"
          />
          <CommandInfo
            cmd = "botinfo"
            description = "查看機器人資訊"
          />
          <CommandInfo
            cmd = "help"
            description = "開啟指令清單"
            usage = {['', 'announcement']}
          />
          <CommandInfo
            cmd = "links"
            aliases = {['link', 'hzweb', 'invite', 'website']}
            description = "取得機器人相關連結"
          />
          <CommandInfo
            cmd = "name"
            description = "機器人叫什麼名字呢"
          />
          <CommandInfo
            cmd = "team"
            aliases = {['developers', 'dev']}
            description = "顯示 HiZollo 的團隊成員清單"
          />
        </tbody>
      </table>
    </>
  );
}

function ContactTable() {
  return (
    <>
      <h2>聯繫</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "bug"
            description = "回報錯誤"
            usage = {['avatar指令跑不出來']}
          />
          <CommandInfo
            cmd = "sponsor"
            aliases = {['donate']}
            description = "顯示贊助資訊"
          />
          <CommandInfo
            cmd = "suggest"
            aliases = {['sug']}
            description = "傳送建議到後台"
            usage = {['新增經驗值系統']}
          />
        </tbody>
      </table>
    </>
  );
}

function NetworkTable() {
  return (
    <>
      <h2>HiZollo 聯絡網</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "guildrop"
            aliases = {['hzdrop']}
            description = "傳送訊息至指定伺服器"
            usage = {['Surviv.io 中文維基']}
          />
          <CommandInfo
            cmd = "hznetwork"
            aliases = {['hzn']}
            description = "檢查 HiZolllo 聯絡網狀況"
            usage = {['', '1']}
          />
        </tbody>
      </table>
    </>
  )
}

function FunctionTable() {
  return (
    <>
      <h2>功能</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "avatar"
            aliases = {['av']}
            description = "顯示一或多名用戶的頭像"
            usage = {['', '<span class="dc-mention">@Zollo757347</span>']}
          />
          <CommandInfo
            cmd = "buttonrole"
            description = "產生手動取得身分組的按鈕，如果上一則訊息有同種按鈕，按鈕會自動併入，一則訊息最多可以擁有 5 個按鈕"
            usage = {[
              '成員',
              '接收公告 每當伺服器有公告時會被通知',
              '103866302847392227 一個身份組 🤔'
            ]}
          />
          <CommandInfo
            cmd = "calc"
            aliases = {['c']}
            description = "計算一串算式"
            usage = {['1+1', '(9-1)/2']}
          />
          <CommandInfo
            cmd = "choose"
            description = "多選一"
            usage = {['小明 小華 小美']}
          />
          <CommandInfo
            cmd = "deletemsg"
            aliases = {['del']}
            description = "在指定時間後刪除此指令的前一則訊息"
            usage = {['5', '5 true']}
          />
          <CommandInfo
            cmd = "getmsg"
            aliases = {['gm']}
            description = "將伺服器最近訊息匯出為指定格式的檔案，可以是文字檔或 JSON 檔案"
            usage = {['', 'json']}
          />
          <CommandInfo
            cmd = "purge"
            description = "刪除指定數量的訊息"
            usage = {['80']}
          />
          <CommandInfo
            cmd = "server"
            aliases = {['guild']}
            description = "取得伺服器資訊"
          />
          <CommandInfo
            cmd = "userinfo"
            aliases = {['user']}
            description = "取得用戶資訊"
            usage = {['<span class="dc-mention">@A Person</span>']}
          />
          <CommandInfo
            cmd = "vote"
            aliases = {['poll']}
            description = "讓 HiZollo 幫你發起一個投票"
            usage = {['`晚餐要吃什麼` `牛排` `雞排` `垃圾`']}
          />
        </tbody>
      </table>
    </>
  );
}

function CommandGroupTable() {
  return (
    <>
      <h2>指令群</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "diep"
            aliases = {['d']}
            description = '顯示 <a href="/commands/message/diep">diep 指令群列表</a>或執行群組指令'
          />
          <CommandInfo
            cmd = "music"
            aliases = {['m']}
            description = '顯示 <a href="/commands/message/music">music 指令群列表</a>或執行群組指令'
          />
          <CommandInfo
            cmd = "osu"
            aliases = {['o']}
            description = '顯示 <a href="/commands/message/osu">osu 指令群列表</a>或執行群組指令'
          />
        </tbody>
      </table>
    </>
  );
}

function EntertainTable() {
  return (
    <>
      <h2>娛樂</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "8ball"
            description = "詢問神奇的八號球"
            usage = {['Am I smart?']}
          />
          <CommandInfo
            cmd = "coin"
            description = "擲一枚硬幣"
          />
          <CommandInfo
            cmd = "confession"
            aliases = {['cf']}
            description = "向伺服器中的一位用戶告白"
            usage = {['<span class="dc-mention">@Rick Astley</span>']}
          />
          <CommandInfo
            cmd = "dice"
            description = "擲骰子"
          />
          <CommandInfo
            cmd = "fact"
            description = "查看一個事實，可鍵入分類以查看特定種類的事實，目前有 anecdote、discord、human、hz、math、nature、subject、world 共 8 種分類"
            usage = {['', 'anecdote hz']}
          />
          <CommandInfo
            cmd = "react"
            aliases = {['r']}
            description = "讓 HiZollo 為前一則訊息反應個表情"
            usage = {['🤔']}
          />
          <CommandInfo
            cmd = "repeat"
            description = "讓機器人複讀你的話"
            usage = {['I love pineapple pizza']}
          />
          <CommandInfo
            cmd = "say"
            description = "讓機器人說一句指定的話"
            usage = {['I am HiZollo']}
          />
          <CommandInfo
            cmd = "think"
            description = "讓機器人送出一個表情庫的思考中表情，你也可以鍵入種類讓他輸出特定的思考表情"
            usage = {['', '10']}
          />
          <CommandInfo
            cmd = "throwball"
            aliases = {['throw']}
            description = "把球砸向你討厭的人"
            usage = {['<span class="dc-mention">@AC0xRPFS001</span>']}
          />
        </tbody>
      </table>
    </>
  );
}

function SingleGameTable() {
  return (
    <>
      <h2>單人遊戲</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "2048"
            aliases = {['tofe']}
            description = "開啟一場 2048 遊戲"
            usage={['', 'true']}
          />
          <CommandInfo
            cmd = "bullsandcows"
            aliases = {['bac', 'gussab', 'ga']}
            description = "遊玩一場猜 AB 遊戲"
            usage = {['', 'true']}
          />
          <CommandInfo
            cmd = "fliptrip"
            aliases = {['ft']}
            description = "遊玩指定棋子數量的 Flip Trip"
            usage = {['4']}
          />
          <CommandInfo
            cmd = "lightsup"
            aliases = {['lu']}
            description = "遊玩一場點燈遊戲"
          />
        </tbody>
      </table>
    </>
  );
}

function MultiGameTable() {
  return (
    <>
      <h2>多人遊戲</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "bigtwo"
            description = "開啟一場四人的大老二遊戲"
            usage = {['<span class="dc-mention">@Ling</span> <span class="dc-mention">@Koishi</span> <span class="dc-mention">@Aya</span>']}
          />
          <CommandInfo
            cmd = "finalcode"
            aliases = {['fc']}
            description = "遊玩一場猜終極密碼，支援多人模式"
            usage = {['', '<span class="dc-mention">@Deleted User dQw4w9WgXcQ</span> <span class="dc-mention">@Junior HiZollo</span> <span class="dc-mention">@No Name</span>']}
          />
          <CommandInfo
            cmd = "gomoku"
            aliases = {['gmk']}
            description = "	與朋友遊玩 13x13 的五子棋"
            usage = {['<span class="dc-mention">@ABC</span>']}
          />
          <CommandInfo
            cmd = "tictactoe"
            aliases = {['ttt']}
            description = "跟 HiZollo 或是另一位用戶遊玩井字遊戲"
            usage = {['first', '<span class="dc-mention">@Juan</span>']}
          />
        </tbody>
      </table>
    </>
  )
}

function MiscellaneousTable() {
  return (
    <>
      <h2>雜項</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "chef"
            description = "廚一個人"
            usage = {['<span class="dc-mention">@Zollo757347</span>']}
          />
          <CommandInfo
            cmd = "ping"
            description = "取得 Ping 值"
          />
          <CommandInfo
            cmd = "refresh"
            description = "重刷 HiZollo 的動態"
          />
          <CommandInfo
            cmd = "rip"
            description = "Rest In Peace!"
          />
          <CommandInfo
            cmd = "useless"
            description = "Useless."
          />
        </tbody>
      </table>
    </>
  )
}

export default MessageCommands;
