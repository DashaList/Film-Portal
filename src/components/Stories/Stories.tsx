import React from 'react'
import styles from './Stories.module.scss'
import RowSlider from '../RowSlider/RowSlider'

const Stories = () => {
  return (
    <div className={styles.Stories}>
        <h2>Истории</h2>
        <RowSlider></RowSlider>
    </div>
  )
}

export default Stories