package com.samid.crud_mahasiswa.controller;

import com.samid.crud_mahasiswa.model.Mahasiswa;
import com.samid.crud_mahasiswa.service.MahasiswaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="*")
public class MahasiswaController {
	
	@Autowired
	MahasiswaService mahasiswaService;
	
	@RequestMapping(method=RequestMethod.GET, value="/mahasiswa")
	public Iterable<Mahasiswa> mahasiswa(){
		return mahasiswaService.getAllMahasiswa();
	}

	@RequestMapping(method=RequestMethod.POST, value="/mahasiswa")
	public void addMahasiswa(@RequestBody Mahasiswa mahasiswa) {
	    mahasiswaService.saveMahasiswa(mahasiswa);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/mahasiswa/{id}")
	public Optional<Mahasiswa> show(@PathVariable String id){
		return mahasiswaService.getMahasiswaById(id);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/mahasiswa/{id}")
	public Mahasiswa update(@PathVariable String id, @RequestBody Mahasiswa mahasiswa) {
		return mahasiswaService.updateMahasiswa(id, mahasiswa);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/mahasiswa/{id}")
	public void delete(@PathVariable String id) {
		mahasiswaService.deleteMahasiswa(id);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/mahasiswa/search")
	public List<Mahasiswa> search(@RequestParam String search){
		return mahasiswaService.searchMahasiswa(search);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/mahasiswa/find")
	public List<Mahasiswa> searchMhs(@RequestBody String search){
		return mahasiswaService.searchMahasiswa(search);
	}
	

}
