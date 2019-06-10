import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import {StickyContainer} from 'react-sticky'
import {injectGlobal} from 'emotion'
import {graphql} from 'gatsby'

import Layout from '../components/Layout/Layout'
import SiteMetadata from '../components/SiteMetadata'
import NavBarExternal from '../components/NavBarExternal'
import TopHalfWhite from '../components/TopHalfWhite'
import blackLogo from '../images/logo-black.svg'
import {css} from '@emotion/core'
import Media from 'react-media'
import arrowWhite from '../images/icons/arrow-white.svg'
import iPhone from '../images/phones/text-me-the-app.png'

class TextMeTheAppTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', sent: false}
    this.handleChange = this.handleChange.bind(this)
    this.sendSMS = this.sendSMS.bind(this)
    this.setInitialValue = this.setInitialValue.bind(this)
  }

  setInitialValue() {
    this.setState({value: '+44'})
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  sendSMS(event) {
    event.preventDefault()
    var linkData = {
      tags: [],
      channel: 'Website',
      feature: 'TextMeTheApp',
      data: {
        foo: 'bar'
      }
    }
    var options = {}
    branch.sendSMS(this.state.value, linkData, options, () => {})
    this.setState({value: '', sent: true})
  }

  renderButton(textField) {
    const text = this.state.sent
      ? textField.buttonTextAfter
      : textField.buttonText
    return (
      <button style={styles.buttonStyle} onClick={this.sendSMS}>
        <span style={styles.buttonContainer}>
          <Media query="(min-width: 400px)">
            {matches =>
              matches ? (
                <Fragment>
                  <span style={styles.buttonText}>{text}</span>
                  <Media query="(min-width: 610px)">
                    {matches =>
                      matches ? (
                        <img style={styles.buttonIcon} src={arrowWhite} />
                      ) : null
                    }
                  </Media>
                </Fragment>
              ) : (
                <Fragment>
                  <span
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      ...styles.buttonText
                    }}
                  >
                    {text}
                  </span>
                  <Media query="(min-width: 610px)">
                    {matches =>
                      matches ? (
                        <img style={styles.buttonIcon} src={arrowWhite} />
                      ) : null
                    }
                  </Media>
                </Fragment>
              )
            }
          </Media>
        </span>
      </button>
    )
  }

  renderInput(textField) {
    return (
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder={textField.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        style={styles.inputStyle}
        onFocus={this.setInitialValue}
      />
    )
  }

  renderHelperText(textField) {
    return <p style={styles.helperParagraph}>{textField.subText}</p>
  }

  renderIphone() {
    return (
      <Media query="(min-width: 1024px) and (min-height: 750px)">
        {matches =>
          matches ? (
            <img style={{width: 475, marginTop: 125}} src={iPhone} />
          ) : null
        }
      </Media>
    )
  }

  render() {
    const {
      siteMetadataOverride,
      header,
      topHalf,
      textField
    } = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <StickyContainer>
          <div css={css(styles.root)}>
            <SiteMetadata
              title={siteMetadataOverride.title}
              description={siteMetadataOverride.description}
              keywords={siteMetadataOverride.keywords}
              ogTitle={siteMetadataOverride.openGraph.title}
              ogDescription={siteMetadataOverride.openGraph.description}
              ogImage={siteMetadataOverride.openGraph.image}
              twtTitle={siteMetadataOverride.twitter.title}
              twtDescription={siteMetadataOverride.twitter.description}
              twtImage={siteMetadataOverride.twitter.image}
            />
            <NavBarExternal
              backIcon={header.backIcon}
              backText={header.backText}
              backUrl={header.backUrl}
            />
            <TopHalfWhite title={topHalf.title} subTitle={topHalf.subTitle} />

            <div css={css(styles.container)}>
              <div css={css(styles.content)}>
                <div css={css(styles.toolbar)}>
                  {this.renderInput(textField)}
                  {this.renderButton(textField)}
                  {this.renderHelperText(textField)}
                </div>

                {this.renderIphone()}
              </div>
            </div>
          </div>
        </StickyContainer>
      </Layout>
    )
  }
}

export default TextMeTheAppTemplate

export const query = graphql`
  query TextMeTheApp($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        siteMetadataOverride {
          title
          description
          keywords
          openGraph {
            title
            description
            image
          }
          twitter {
            title
            description
            image
          }
        }
        header {
          backIcon
          backText
          backUrl
        }
        textField {
          subText
          buttonText
          buttonTextAfter
          placeholder
        }
        topHalf {
          subTitle
          title
        }
      }
    }
  }
`

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100vh',
    backgroundColor: '#FFDA00'
  },
  container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0 16px',

    '@media (min-width: 1024px)': {
      width: 1024
    }
  },
  toolbar: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    flex: 1
  },
  helperParagraph: {
    position: 'absolute',
    left: 0,
    bottom: -36,
    maxWidth: '450px',
    fontSize: '14px',
    fontFamily: 'Chivo',
    color: '#979797',
    marginBottom: 0
  },
  buttonStyle: {
    apperance: 'none',
    display: 'inline-block',
    minHeight: '54px',
    padding: '0 16px',
    background: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '2px',
    boxShadow: '0 4px 12px -5px rgba(0,0,0,0.5)',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    lineHeight: '54px',
    textAlign: 'left',
    marginLeft: '32px',
    marginRight: '16px',
    flex: '0 0 auto'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  buttonText: {
    display: 'block',
    fontFamily: 'ITC, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    flex: '1 1 auto',
    textAlign: 'left'
  },
  buttonIcon: {
    display: 'block',
    marginLeft: '24px',
    marginBottom: 0
  },
  inputStyle: {
    appearance: 'none',
    minHeight: '54px',
    padding: '0 16px',
    background: 'none',
    border: 'none',
    outline: 'none',
    flex: 1,
    fontFamily: 'Chivo, sans-serif',
    fontSize: '20px',
    maxHeight: '5vh',
    maxWidth: '400px',
    backgroundColor: '#fff',
    border: '1px solid #979797',
    borderRadius: '2px',
    boxShadow: '0 4px 12px -5px rgba(0,0,0,0.5)'
  }
}
