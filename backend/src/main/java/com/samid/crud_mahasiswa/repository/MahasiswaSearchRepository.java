package com.samid.crud_mahasiswa.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.samid.crud_mahasiswa.model.Mahasiswa;

@Repository
public class MahasiswaSearchRepository {
	@Autowired
	MongoTemplate mongoTemplate;
	
	public List<Mahasiswa> searchMahasiswa(String search) {
		Query query = new Query();
		query.addCriteria(Criteria.where("nama").regex(search, "i"));
		List<Mahasiswa> mahasiswa = mongoTemplate.find(query, Mahasiswa.class);
		return mahasiswa;
	}

}
