import { createSelector } from 'reselect'

export default createSelector([
    state => state.location.type,
    state => state.location.payload,
    state => state.videosHash,
    state => state.videosByCategory,
  ],
  (type, { slug }, hash1) => {
    if (type === 'VIDEO') return !hash1[slug]
  }
)