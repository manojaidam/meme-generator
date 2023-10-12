import {Component} from 'react'
import {
  MainContainer,
  ResponsiveContainer,
  FormDataContainer,
  FormContainer,
  MainHeading,
  LabelTextElements,
  InputElement,
  SelectElement,
  GenerateButton,
  ImageShowContainer,
  DisplayTextElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    buttonTextInput: '',
    activeFontSizeOptionIdInput: parseInt(fontSizesOptionsList[0].optionId),
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeButtonText = event => {
    this.setState({buttonTextInput: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({activeFontSizeOptionIdInput: event.target.value})
  }

  renderImageUrl = () => {
    const {imageUrlInput} = this.state
    return (
      <FormDataContainer>
        <LabelTextElements htmlFor="imageUrl">Image URL</LabelTextElements>
        <InputElement
          id="imageUrl"
          value={imageUrlInput}
          placeholder="Enter the Image URL"
          onChange={this.onChangeImageUrl}
        />
      </FormDataContainer>
    )
  }

  renderTopText = () => {
    const {topTextInput} = this.state
    return (
      <FormDataContainer>
        <LabelTextElements htmlFor="topText">Top Text</LabelTextElements>
        <InputElement
          value={topTextInput}
          id="topText"
          placeholder="Enter The Top Text"
          onChange={this.onChangeTopText}
        />
      </FormDataContainer>
    )
  }

  renderButtonText = () => {
    const {buttonTextInput} = this.state
    return (
      <FormDataContainer>
        <LabelTextElements htmlFor="buttonText">Bottom Text</LabelTextElements>
        <InputElement
          value={buttonTextInput}
          id="buttonText"
          placeholder="Enter the Button Text"
          onChange={this.onChangeButtonText}
        />
      </FormDataContainer>
    )
  }

  renderFontSize = () => {
    const {activeFontSizeOptionIdInput} = this.state
    return (
      <FormDataContainer>
        <LabelTextElements htmlFor="dropDownList">Font Size</LabelTextElements>
        <SelectElement
          id="dropDownList"
          value={activeFontSizeOptionIdInput}
          onChange={this.onChangeSelectOption}
        >
          {fontSizesOptionsList.map(eachListItem => (
            <option key={eachListItem.optionId} value={eachListItem.optionId}>
              {eachListItem.displayText}
            </option>
          ))}
        </SelectElement>
      </FormDataContainer>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      topTextInput,
      imageUrlInput,
      buttonTextInput,
      activeFontSizeOptionIdInput,
    } = this.state

    this.setState({
      topText: topTextInput,
      backgroundImageUrl: imageUrlInput,
      bottomText: buttonTextInput,
      activeFontSizeId: activeFontSizeOptionIdInput,
    })
  }

  render() {
    const {
      topText,
      backgroundImageUrl,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <MainContainer>
        <ResponsiveContainer>
          <MainHeading>Meme Generator</MainHeading>
          <FormContainer onSubmit={this.onSubmitForm}>
            {this.renderImageUrl()}
            {this.renderTopText()}
            {this.renderButtonText()}
            {this.renderFontSize()}
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </ResponsiveContainer>
        <ImageShowContainer
          data-testid="meme"
          backgroundImageUrl={backgroundImageUrl}
        >
          <DisplayTextElement fontSize={activeFontSizeId}>
            {topText}
          </DisplayTextElement>
          <DisplayTextElement fontSize={activeFontSizeId}>
            {bottomText}
          </DisplayTextElement>
        </ImageShowContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
