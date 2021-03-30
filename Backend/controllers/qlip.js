const Dashreports = require('../Models/dashreports');
const Pastreports = require('../Models/dashreports');

exports.createPastreports =  (req, res, next) => {
    const pastreports = new Pastreports({
      imageUrl: req.body.imageUrl,
      model: req.body.model,
      defection: req.body.defection,
      condition: req.body.condition,
      defpart: req.body.defpart
    });
};

exports.createDashreports = (req, res, next) => {
    const dashreports = new Dashreports({
      title: req.body.title,
      count: req.body.count,
    });
};

exports.getpastrep =  (req, res, next) => {
    Pastreports.find().then(
      (pastreports) => {
        res.status(200).json(pastreports);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.getpastrepone = (req, res, next) => {
    Pastreports.findOne({
      _id: req.params.id
    }).then(
      (pastreports) => {
        res.status(200).json(pastreports);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

exports.dltreport = (req, res, next) => {
    Pastreports.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.getdashrep = (req, res, next) => {
    Dashreports.find().then(
      (Dashreports) => {
        res.status(200).json(Dashreports);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };