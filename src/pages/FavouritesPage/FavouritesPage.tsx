/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrubs';
import { StorageContext } from '../../components/StorageContext';
import { ProductList } from '../../components/ProductList';
import { Product } from '../../types/Product';

type FavoritesPageProps = {
  setFavLength: React.Dispatch<number>;
  setCartLength: React.Dispatch<number>;
};

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
  setFavLength,
  setCartLength,
}) => {
  const { fav } = useContext(StorageContext);
  const [newFav, setNewFav] = useState(fav);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const filterFavs = (products: Product[]) => {
    return products.filter((product: Product) => {
      return product.itemId
        .replaceAll('-', '')
        .includes(query.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase());
    });
  };

  useEffect(() => {
    setNewFav(filterFavs(fav));
  }, [searchParams, fav]);

  useEffect(() => {
    setFavLength(fav.length);
  }, [fav.length]);

  return (
    <div className="fav-page">
      <Breadcrumbs />

      {newFav.length > 0 ? (
        <React.Fragment>
          <div className="fav-page__title">Favourites</div>

          <div className="fav-page__quantity">{`${fav.length} items`}</div>

          <ProductList
            products={newFav}
            isNormal
            setFavLength={setFavLength}
            setCartLength={setCartLength}
          />
        </React.Fragment>
      ) : (
        <div className="fav-page__empty-page">Your favourites are empty</div>
      )}
    </div>
  );
};
