import Request from 'sync-request';

export default function Requester(method, uri, options) {

  var data = Request(method, uri, options);
  return JSON.parse(data.getBody());
}