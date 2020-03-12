import React, { Component } from 'react';

class Examples extends Component {
  constructor() {
    super();
    
    this.state = {
      active: 0
    }

    this.setActive = this.setActive.bind(this);
    this.changeActive = this.changeActive.bind(this);
  }

  setActive(image) {
    this.setState({
      active: image
    })
  }

  changeActive(modifier) {
    var newActive = 0;
    if(modifier == '+') {
      if(this.state.active != 3) {
        newActive = this.state.active + 1
      } else {
        newActive = this.state.active;
      }
    } else if(modifier == '-') {
      if(this.state.active != 0) {
        newActive = this.state.active - 1
      } else {
        newActive = this.state.active;
      }
    }
    
    this.setState({
      active: newActive
    })
  }
  

  render() {
    return (
      <div className='examples'>
        <div className='examples__container'>
          <a onClick={() => this.changeActive('-')}>
            <i className='fas fa-arrow-circle-up' />
          </a>


          <a onClick={() => this.setActive(0)} className={`${this.state.active == 0 ? 'active' : ''} examples__container__image`}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6f05-a53143c8-9071-4986-9eca-11d7af7ac873.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_line_art_by_arcticsoui_dds6f05-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmYwNS1hNTMxNDNjOC05MDcxLTQ5ODYtOWVjYS0xMWQ3YWY3YWM4NzMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PfbcyxcYksO-kUxEGbH6a6tof4dRBtSuNlMoxfdWYec' />
          </a>
          <a onClick={() => this.setActive(1)} className={`${this.state.active == 1 ? 'active' : ''} examples__container__image`}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6ey7-ffb47cfb-7813-4eae-bd1b-ecb68ce9e831.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_flat_colors_by_arcticsoui_dds6ey7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmV5Ny1mZmI0N2NmYi03ODEzLTRlYWUtYmQxYi1lY2I2OGNlOWU4MzEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.G5cBhOsxpZ8inBxDDzNtM5pUrneyeTs4-e0YqqWW-FM' />
          </a>
          <a onClick={() => this.setActive(2)} className={`${this.state.active == 2 ? 'active' : ''} examples__container__image`}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6bc0-0febd55c-8547-40a0-8b25-8eff01ea4bfe.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_by_arcticsoui_dds6bc0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmJjMC0wZmViZDU1Yy04NTQ3LTQwYTAtOGIyNS04ZWZmMDFlYTRiZmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.voUBQbLMI2cnkaWmaMybLss6JPc8JswDjyDU6fsKe4I' />
          </a>
          <a onClick={() => this.setActive(3)} className={`${this.state.active == 3 ? 'active' : ''} examples__container__image`}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6bff-c8854377-9738-44df-bf54-2b04d21a682e.png/v1/fill/w_1280,h_960,q_80,strp/the_accordion_elemental_by_arcticsoui_dds6bff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMDJjNGEyZTYtODdlNi00ZWY0LWIzOTAtOTcyYjM2NmZlMGZjXC9kZHM2YmZmLWM4ODU0Mzc3LTk3MzgtNDRkZi1iZjU0LTJiMDRkMjFhNjgyZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EPuMGyeknM3DayjzUOhKravyAniab22AltIAiskfdLY'/>
          </a>


          <a onClick={() => this.changeActive('+')}>
            <i className='fas fa-arrow-circle-down' />
          </a>
        </div>


        <div className='examples__showcase'>
          <div className={`${this.state.active == 0 ? '' : 'hidden'} examples__showcase__image`}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6f05-a53143c8-9071-4986-9eca-11d7af7ac873.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_line_art_by_arcticsoui_dds6f05-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmYwNS1hNTMxNDNjOC05MDcxLTQ5ODYtOWVjYS0xMWQ3YWY3YWM4NzMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PfbcyxcYksO-kUxEGbH6a6tof4dRBtSuNlMoxfdWYec' />
          </div>
          <div className={`${this.state.active == 1 ? '' : 'hidden'} examples__showcase__image`}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6ey7-ffb47cfb-7813-4eae-bd1b-ecb68ce9e831.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_flat_colors_by_arcticsoui_dds6ey7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmV5Ny1mZmI0N2NmYi03ODEzLTRlYWUtYmQxYi1lY2I2OGNlOWU4MzEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.G5cBhOsxpZ8inBxDDzNtM5pUrneyeTs4-e0YqqWW-FM' />
          </div>
          <div className={`${this.state.active == 2 ? '' : 'hidden'} examples__showcase__image`}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6bc0-0febd55c-8547-40a0-8b25-8eff01ea4bfe.png/v1/fill/w_1280,h_1280,strp/arcari_headshot_by_arcticsoui_dds6bc0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzAyYzRhMmU2LTg3ZTYtNGVmNC1iMzkwLTk3MmIzNjZmZTBmY1wvZGRzNmJjMC0wZmViZDU1Yy04NTQ3LTQwYTAtOGIyNS04ZWZmMDFlYTRiZmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.voUBQbLMI2cnkaWmaMybLss6JPc8JswDjyDU6fsKe4I' />
          </div>
          <div className={`${this.state.active == 3 ? '' : 'hidden'} examples__showcase__image`}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c4a2e6-87e6-4ef4-b390-972b366fe0fc/dds6bff-c8854377-9738-44df-bf54-2b04d21a682e.png/v1/fill/w_1280,h_960,q_80,strp/the_accordion_elemental_by_arcticsoui_dds6bff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMDJjNGEyZTYtODdlNi00ZWY0LWIzOTAtOTcyYjM2NmZlMGZjXC9kZHM2YmZmLWM4ODU0Mzc3LTk3MzgtNDRkZi1iZjU0LTJiMDRkMjFhNjgyZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EPuMGyeknM3DayjzUOhKravyAniab22AltIAiskfdLY'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Examples;