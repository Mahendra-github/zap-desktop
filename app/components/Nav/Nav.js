import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Isvg from 'react-inlinesvg'

import walletIcon from 'icons/wallet.svg'
import peersIcon from 'icons/peers.svg'
import channelsIcon from 'icons/channels.svg'

import styles from './Nav.scss'

const Nav = ({ openPayForm, openRequestForm }) => (
  <nav className={styles.nav}>
    <header className={styles.header}>
      <h1>zap</h1>
      <span>beta</span>
    </header>
    <ul className={styles.links}>
      <NavLink exact to='/' activeClassName={styles.active} className={styles.link}>
        <span className={styles.activeBorder} />
        <li>
          <Isvg styles={{ verticalAlign: 'middle' }} src={walletIcon} />
          <span>Wallet</span>
        </li>
      </NavLink>
      <NavLink exact to='/peers' activeClassName={styles.active} className={styles.link}>
        <span className={styles.activeBorder} />
        <li>
          <Isvg styles={{ verticalAlign: 'middle' }} src={peersIcon} />
          <span>Peers</span>
        </li>
      </NavLink>
      <NavLink exact to='/channels' activeClassName={styles.active} className={styles.link}>
        <span className={styles.activeBorder} />
        <li>
          <Isvg styles={{ verticalAlign: 'middle' }} src={channelsIcon} />
          <span>Channels</span>
        </li>
      </NavLink>
    </ul>
    <div className={styles.buttons}>
      <div className={`buttonPrimary ${styles.button}`} onClick={openPayForm}>
        <span>Pay</span>
      </div>
      <div className={`buttonPrimary ${styles.button}`} onClick={openRequestForm}>
        <span>Request</span>
      </div>
    </div>
  </nav>
)

Nav.propTypes = {
  openPayForm: PropTypes.func.isRequired,
  openRequestForm: PropTypes.func.isRequired
}

export default Nav
