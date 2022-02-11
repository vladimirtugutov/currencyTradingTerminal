# currencyTradingTerminal
SPA – простейший эмулятор терминала торговли валютой. Тестовое задание.

Приложение должно содержать вкладку с торговым функционалом (тикер), на котором
можно:

● видеть время

● выбирать пару валют для торговли

● видеть цены на покупку и продажу для этой пары валют

● создавать заявки на покупку или продажуЦены необходимо генерировать случайным образом для всех валютных пар, периодически
необходимо их изменять, имитируя таким образом поведение настоящих цен.

Клиент-серверное взаимодействие не предполагается, все данные хранятся только на время
жизни сессии.

При клике по цене должен появляться модальный диалог, на котором отображается:

● информация о стороне заявки (покупка/продажа), цене и инструменте

● поле для ввода объема заявки

● кнопки:

  ○ Cancel – закрыть диалог

  ○ Ok – закрыть диалог и сохранить заявку

Вкладка со списком размещенных заявок содержит таблицу с полями:

● Side - сторона заявки (покупка/продажа)

● Price - цена

● Instrument - торговый инструмент

● Volume - объем заявки

● Timestamp - время создания заявки

Необходимые команды для запуска приложения:

Устанавливаем зависимости: yarn

Запускаем фронт: yarn start
