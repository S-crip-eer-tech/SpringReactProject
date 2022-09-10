package com.SpringReactEstudos.dsmeta.services;


import java.text.DecimalFormat;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.SpringReactEstudos.dsmeta.entities.Sale;
import com.SpringReactEstudos.dsmeta.repositories.SaleRepository;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;
	
	@Autowired
	private SaleRepository saleRepository;
	
	public void sendSms(Long saleId) {
		
		Sale sale = saleRepository.findById(saleId).get();
		
		LocalDate date = sale.getDate().minusDays(1);
		
		String msg = "O vendedor " + sale.getSellerName() + " foi destaque em " + date
			    + " com um total de R$ " + new DecimalFormat("#,##0.00").format(sale.getAmount());		
		Twilio.init(twilioSid, twilioKey);
	
		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}