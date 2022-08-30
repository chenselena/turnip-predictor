let Price = require('../models/price');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('Prices', () => {
    beforeEach((done) => {
        Price.remove({}, (err) => {
           done();
        });
    });

  describe('/GET price', () => {
      it('should GET all the prices if it is empty', (done) => {
        chai.request(server)
            .get('/prices')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  describe('/POST prices', () => {
    it('should not POST a price without first_buy field', (done) => {
        let price = {
            previous_pattern: 0,
            buy_price: 95
        }
      chai.request(server)
          .post('/prices')
          .send(price)
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.eql("Error while adding price. Try again later.");
            done();
          });
    });
    it('should not POST a price without previous_pattern field', (done) => {
        let price = {
            first_buy: "Yes",
            buy_price: 95,
        }
      chai.request(server)
          .post('/prices')
          .send(price)
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.eql("Error while adding price. Try again later.");
            done();
          });
    });
    it('should not POST a price without buy_price field', (done) => {
        let price = {
            first_buy: "Yes",
            previous_pattern: 0,
        }
      chai.request(server)
          .post('/prices')
          .send(price)
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.eql("Error while adding price. Try again later.");
            done();
          });
    });
    it('should not POST a price if a required field is invalid', (done) => {
        let price = {
            first_buy: "Yes",
            previous_pattern: "Not a valid field",
            buy_price: 95
        }
      chai.request(server)
          .post('/prices')
          .send(price)
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.eql("Error while adding price. Try again later.");
            done();
          });
    });
    it('should POST a price with all required fields', (done) => {
        let price = {
            first_buy: "Yes",
            previous_pattern: 3,
            buy_price: 90,
            mon_AM: 89,
            mon_PM: 100,
        }
      chai.request(server)
          .post('/prices').set('Content-Type', 'application/json')
          .send(price)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("successful");
                res.body.price.should.have.property('first_buy').eql("Yes");
                res.body.price.should.have.property('previous_pattern').eql(3);
                res.body.price.should.have.property('buy_price').eql(90);
                res.body.price.should.have.property('mon_AM').eql(89);
                res.body.price.should.have.property('mon_PM').eql(100);
            done();
          });
    });
    it('should POST a price even if there is no weekday price', (done) => {
        let price = {
            first_buy: "Yes",
            previous_pattern: 3,
            buy_price: 90
        }
      chai.request(server)
          .post('/prices').set('Content-Type', 'application/json')
          .send(price)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("successful");
                res.body.price.should.have.property('first_buy').eql("Yes");
                res.body.price.should.have.property('previous_pattern').eql(3);
                res.body.price.should.have.property('buy_price').eql(90);
            done();
          });
    });
  });
});
