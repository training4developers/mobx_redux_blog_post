import fetch from 'node-fetch';

export class BaseData {

  constructor(baseUrl, path) {
    this._baseUrl = baseUrl;
    this._path = path;
  }

  getCollectionURL() {
    return this._baseUrl + '/' + this._path;
  }

  getElementURL(elementId) {
    return this._baseUrl + '/' + this._path + '/' + elementId;
  }

  all() {
    return fetch(this.getCollectionURL())
      .then(res => res.json());
  }

  one(id) {
    return fetch(this.getElementURL(id))
      .then(res => res.json());
  }

  insert(data) {
    return fetch(this.getCollectionURL(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json());
  }

  replace(data) {
    return fetch(this.getElementURL(data.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json());
  }

  update(data) {
    return fetch(this.getElementURL(data.id), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json());
  }

  delete(id) {

    let deletedRecord;

    return this.one(id)
      .then(record => deletedRecord = record)
      .then(() => fetch(this.getElementURL(id), {
        method: 'DELETE'
      }))
      .then(() => deletedRecord);
  }
}