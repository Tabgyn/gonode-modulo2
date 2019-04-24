const { Appointment, User } = require('../models')

class ScheduleController {
  async index (req, res) {
    const provider = req.params.provider
    const appointments = await Appointment.findAll({
      include: [
        {
          model: User,
          as: 'user'
        }
      ],
      where: { provider_id: provider }
    })

    return res.render('schedule/index', { appointments })
  }
}

module.exports = new ScheduleController()
