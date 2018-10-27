package com.samid.crud_mahasiswa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.samid.crud_mahasiswa.model.Mahasiswa;
import com.samid.crud_mahasiswa.repository.MahasiswaRepository;
import com.samid.crud_mahasiswa.repository.MahasiswaSearchRepository;


@Service
public class MahasiswaService {
	
	@Autowired
	MahasiswaRepository mahasiswaRepository;
	
	@Autowired
	MahasiswaSearchRepository mahasiswaSearchRepository;
	
	
	public Iterable<Mahasiswa> getAllMahasiswa() {
	    return mahasiswaRepository.findAll();
	}
	
	public void saveMahasiswa(Mahasiswa mahasiswa) {
		mahasiswaRepository.save(mahasiswa);
	}
	
	public Optional<Mahasiswa> getMahasiswaById(String id) {
		return mahasiswaRepository.findById(id);
	}

	public Mahasiswa updateMahasiswa(String id, Mahasiswa mahasiswa) {
		
		Optional<Mahasiswa> optMahasiswa = mahasiswaRepository.findById(id);
	    Mahasiswa mhs = optMahasiswa.get();
	    if(mahasiswa.getNama() != null) {
	        mhs.setNama(mahasiswa.getNama());
	    }
	    
	    if(mahasiswa.getEmail() != null) {
	    	mhs.setEmail(mahasiswa.getEmail());
	    }
	    
	    if(mahasiswa.getAlamat() != null) {
	    	mhs.setAlamat(mahasiswa.getAlamat());
	    }
	    
	    if(mahasiswa.getNim() != null) {
	    	mhs.setNim(mahasiswa.getNim());
	    }
	    mahasiswaRepository.save(mhs);
	    return mhs;
	}

	public void deleteMahasiswa(String id) {
		Optional<Mahasiswa> optmahasiswa = mahasiswaRepository.findById(id);
		Mahasiswa mahasiswa = optmahasiswa.get();
		mahasiswaRepository.delete(mahasiswa);
	}
	
	public List<Mahasiswa> searchMahasiswa(String nama){
		return mahasiswaSearchRepository.searchMahasiswa(nama);
	}
	
	
	
}
