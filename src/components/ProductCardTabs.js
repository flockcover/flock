import React from 'react'

import {css} from 'react-emotion'

import ProductCard from './PriceCard'

import SmallText from './SmallText'

const productCardTabPanel = ({customerTypeDesc, productCards}) => {
  const goToUrl = (url, external) => window.open(url, external ? '_blank' : '_self')
  const renderProductCards = productCards =>
    productCards.map(
      ({
        productType,
        fromText,
        perText,
        buttonOneText,
        buttonTwoText,
        buttonOneUrl,
        buttonTwoUrl,
        buttonOneExternal,
        buttonTwoExternal,
        fromPrice,
        policyFeatureList,
        icon
      }) => (
        <ProductCard
          key={productType}
          icon={icon}
          productType={productType}
          fromText={fromText}
          perText={perText}
          buttonOneText={buttonOneText}
          buttonTwoText={buttonTwoText}
          fromPrice={fromPrice}
          policyFeatureList={policyFeatureList}
          buttonOneOnClick={() => goToUrl(buttonOneUrl, buttonOneExternal)}
          buttonTwoOnClick={() => goToUrl(buttonTwoUrl, buttonTwoExternal)}
          className={css({marginRight: 16, marginBottom: 16})}
        />
      )
    )

  return (
    <div>
      <SmallText className={css({color: 'white'})} mb={4} ml={2} mr={2}>
        {customerTypeDesc}
      </SmallText>
      <div
        className={css({
          overflowX: 'scroll',
          WebkitOverflowScrolling: 'touch',
          '-ms-overflow-style': '-ms-autohiding-scrollbar'
        })}
      >
        <div className={css({display: 'inline-flex', padding: '0 20px'})}>
          {productCards && productCards.length > 0
            ? renderProductCards(productCards)
            : null}
        </div>
      </div>
    </div>
  )
}

export default productCardTabPanel