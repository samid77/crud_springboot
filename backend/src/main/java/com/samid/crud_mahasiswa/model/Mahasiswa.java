package com.samid.crud_mahasiswa.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="datamahasiswa")
public class Mahasiswa {
	@Id
	String id;
	
	@TextIndexed
	String nama;
	String nim;
	String email;
	String alamat;
	
	public Mahasiswa() {
		
	}
	
	public Mahasiswa(String nama, String nim, String email, String alamat) {
		this.nama = nama;
		this.nim = nim;
		this.email = email;
		this.alamat = alamat;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNama() {
		return nama;
	}
	public void setNama(String nama) {
		this.nama = nama;
	}
	public String getNim() {
		return nim;
	}
	public void setNim(String nim) {
		this.nim = nim;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAlamat() {
		return alamat;
	}
	public void setAlamat(String alamat) {
		this.alamat = alamat;
	}
	

}
