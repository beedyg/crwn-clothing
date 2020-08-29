import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "../../components/collection-preview/collection-preview.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors.js";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(ShopPage);
