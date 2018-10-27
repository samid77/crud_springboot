package com.samid.crud_mahasiswa.repository;


import com.samid.crud_mahasiswa.model.Mahasiswa;
import org.springframework.data.repository.CrudRepository;


public interface MahasiswaRepository extends CrudRepository<Mahasiswa, String>{
//	@Override
//	void delete(Mahasiswa deleted);
	
}
