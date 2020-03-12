import React, { Component } from 'react';

import DisplayItem from './displayItem';

class Store extends Component {
  render() {
    return (
      <div className='store'>
        <div className='store__line-top'></div>

        <div className='store__content'>
          <DisplayItem
            title='Line art'
            price='10.00'
            description={['Basic lineart', "Headshot only - $3 (Doesn't apply to extras)", 'One character', 'Extra characters + $5 each', 'Up to 3 characters']}
            imgLink='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6f05-a53143c8-9071-4986-9eca-11d7af7ac873.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_line_art_by_arcticsoui_dds6f05-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmYwNS1hNTMxNDNjOC05MDcxLTQ5ODYtOWVjYS0xMWQ3YWY3YWM4NzMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PfbcyxcYksO-kUxEGbH6a6tof4dRBtSuNlMoxfdWYec'
          />

          <DisplayItem
            title='Line art with flat colors'
            price='12.00'
            description={['Line art with flat colors', "Headshot only - $4 (Doesn't apply to extras)", 'One character', 'Extra characters + $6 each', 'Up to 3 characters']}
            imgLink='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6ey7-ffb47cfb-7813-4eae-bd1b-ecb68ce9e831.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_flat_colors_by_arcticsoui_dds6ey7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmV5Ny1mZmI0N2NmYi03ODEzLTRlYWUtYmQxYi1lY2I2OGNlOWU4MzEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.G5cBhOsxpZ8inBxDDzNtM5pUrneyeTs4-e0YqqWW-FM'
          />

          <DisplayItem
            title='Background and shading'
            price='20.00'
            description={['A full picture with background and shading', "Headshot only - $6 (Doesn't apply to extras)", 'One character', 'Extra characters + $10 each', 'Up to 3 characters']}
            imgLink='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6bc0-0febd55c-8547-40a0-8b25-8eff01ea4bfe.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_by_arcticsoui_dds6bc0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmJjMC0wZmViZDU1Yy04NTQ3LTQwYTAtOGIyNS04ZWZmMDFlYTRiZmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.voUBQbLMI2cnkaWmaMybLss6JPc8JswDjyDU6fsKe4I'
          />
        </div>

        <div className='store__line-bottom'></div>
      </div>
    );
  }
}

export default Store;