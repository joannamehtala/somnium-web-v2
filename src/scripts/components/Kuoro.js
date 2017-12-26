import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore';
import { Grid, Row, Col } from 'react-bootstrap';

const Kuoro = (props) => {
  const page = DataStore.getPageBySlug(props.slug);
  const acf = page.acf;
  const fontColor = {
    color: props.color
  }

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2 style={fontColor}>{acf.kuoro_otsikko}</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span>{acf.kuoro_teksti}</span>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2 style={fontColor}>{acf.johtaja_otsikko}</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={9}><span>{acf.johtaja_teksti}</span></Col>
        <Col sm={3}><img src={acf.johtaja_kuva} /></Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2 style={fontColor}>{acf.laulajat_otsikko}</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <h3>{acf.stemmat_sopraano_otsikko}</h3>
          <div>{acf.stemmat_sopraano}</div>
        </Col>
        <Col sm={3}>
          <h3>{acf.stemmat_altto_otsikko}</h3>
          <div>{acf.stemmat_altto}</div>
        </Col>
        <Col sm={3}>
          <h3>{acf.stemmat_tenori_otsikko}</h3>
          <div>{acf.stemmat_tenori}</div>
        </Col>
        <Col sm={3}>
          <h3>{acf.stemmat_basso_otsikko}</h3>
          <div>{acf.stemmat_basso}</div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <h3>{acf.laulajahaku}</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span>{page.content.rendered}</span>
        </Col>
      </Row>
    </Grid>
  );
};

export default Kuoro;
