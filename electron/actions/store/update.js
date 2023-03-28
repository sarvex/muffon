import getTabs from '../tabs/get.js'
import setElectronStoreData from '../electronStore/setData.js'
import setScale from '../app/setScale.js'

export default function update (
  data,
  {
    isSave
  }
) {
  function updateViewStore (
    view
  ) {
    view
      .webContents
      .send(
        'update-store',
        data
      )
  }

  const views = [
    mainWindow,
    aboutWindow,
    ...getTabs()
  ]

  views.forEach(
    updateViewStore
  )

  if (isSave) {
    const dataFormatted =
      JSON.parse(
        data
      )

    setElectronStoreData(
      dataFormatted
    )

    const scale =
      dataFormatted[
        'layout.scale'
      ]

    const isChangeScale = (
      scale >= 0
    )

    if (isChangeScale) {
      setScale(
        scale
      )
    }
  }
}
