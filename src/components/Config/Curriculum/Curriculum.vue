<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row justify="center" align="center" class v-if="isLoading">
      <v-col cols="12" md="12" class="text-center">
        <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
        <p class="google-font mt-2">Getting General Settings</p>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" v-else>
      <v-col md="12" class="my-0 py-0 mt-5">
        <v-toolbar class="elevation-0" style="border:1px solid #e0e0e0;border-radius:5px;">
            <v-toolbar-title class="google-font mr-3">Manage Curriculum Data </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              depressed
              color="indigo"
              :loading="isAdding"
              @click="setData"
              dark
            >Save Curriculum</v-btn>
        </v-toolbar>
        <p class="mb-0 mt-3 google-font" style="color:red"><b>Important! </b> Settings will not be saved until and unless, if you will click the save button</p>
      </v-col>

      <v-col md="12" cols="12">
        
        <v-row class="my-0 py-0 pb-5 mb-2" style="border:1px solid #E0E0E0E0;border-radius:7px">
          <v-col class="mb-0 pb-0 text-center" cols="12">
            <p class="google-font">Curriculum Image </p>
            <v-img :src="(curriculumImage.length>0)?curriculumImage:''" style="border:1px solid #E0E0E0E0;border-radius:7px" contain height="200px"></v-img>
            <ImageUpload type="general" buttonName="Upload" userId="curriculum" @message="showMessageSnakeBar" @uploadedImage="curriculumImageUploaded"/>
            <v-btn color="error" class="mt-2 ml-1" depressed @click="removeImage('curriculum')">Remove Image</v-btn>
          </v-col>

        <v-col class="mb-0 pb-0 text-center" cols="3">
            <p class="google-font">Main Study 1 </p>
            <v-img :src="(study1Image.length>0)?study1Image:''" style="border:1px solid #E0E0E0E0;border-radius:7px" contain height="200px"></v-img>
            <ImageUpload type="general" buttonName="Upload" userId="study1" @message="showMessageSnakeBar" @uploadedImage="study1ImageUploaded"/>
            <v-btn color="error" class="mt-2 ml-1" depressed @click="removeImage('study1')">Remove Image</v-btn>
        </v-col>

        <v-col class="mb-0 pb-0 text-center" cols="3">
            <p class="google-font">Main Study 2 </p>
            <v-img :src="(study2Image.length>0)?study2Image:''" style="border:1px solid #E0E0E0E0;border-radius:7px" contain height="200px"></v-img>
            <ImageUpload type="general" buttonName="Upload" userId="study2" @message="showMessageSnakeBar" @uploadedImage="study2ImageUploaded"/>
            <v-btn color="error" class="mt-2 ml-1" depressed @click="removeImage('study2')">Remove Image</v-btn>
        </v-col>

        <v-col class="mb-0 pb-0 text-center" cols="3">
            <p class="google-font">Main Study 3 </p>
            <v-img :src="(study3Image.length>0)?study3Image:''" style="border:1px solid #E0E0E0E0;border-radius:7px" contain height="200px"></v-img>
            <ImageUpload type="general" buttonName="Upload" userId="study3" @message="showMessageSnakeBar" @uploadedImage="study3ImageUploaded"/>
            <v-btn color="error" class="mt-2 ml-1" depressed @click="removeImage('study3')">Remove Image</v-btn>
        </v-col>

        <v-col class="mb-0 pb-0 text-center" cols="3">
            <p class="google-font">Main Study 4 </p>
            <v-img :src="(study4Image.length>0)?study4Image:''" style="border:1px solid #E0E0E0E0;border-radius:7px" contain height="200px"></v-img>
            <ImageUpload type="general" buttonName="Upload" userId="study4" @message="showMessageSnakeBar" @uploadedImage="study4ImageUploaded"/>
            <v-btn color="error" class="mt-2 ml-1" depressed @click="removeImage('study4')">Remove Image</v-btn>
        </v-col>

        </v-row>
        <v-row class="my-0 py-0">
          <v-col class="mb-0 pb-0" cols="12">
            <v-textarea
              outlined
              label="Curriculum Description"
              v-model="curriculuminfo.curriculumDescription"
              class="mb-0 pb-0"
            ></v-textarea>
          </v-col>
          <v-col class="mb-0 pb-0" cols="12">
            <v-textarea
              outlined
              label="Main Study1 Description"
              v-model="curriculuminfo.study1Description"
              class="mb-0 pb-0"
            ></v-textarea>
          </v-col>
          <v-col class="mb-0 pb-0" cols="12">
            <v-textarea
              outlined
              label="Main Study2 Description"
              v-model="curriculuminfo.study2Description"
              class="mb-0 pb-0"
            ></v-textarea>
          </v-col>
        </v-row>

      </v-col>

     
    </v-row>
  </v-container>
</template>
<script>
import firebase from "@/config/firebase";
import { mapMutations } from 'vuex'

export default {
  name: "Config",
  components:{
    ImageUpload:()=>import('@/components/Common/ImageUpload'),
  },
  data: () => ({
    tab: null,
    isLoading: false,
    isAdding: false,
    curriculumImage:"",
    curriculuminfo: {
      curriculumDescription: "",
      study1Description: "",
      study2Description: "",
      studyImages: {
        study1Image:"",
        study2Image:"",
        study3Image:"",
        study4Image:"",
      },
    }
  }),
  mounted() {
    this.getData();
  },
  methods: {
    ...mapMutations(['setCurri']),
    showMessageSnakeBar(text){
      this.$emit("show", text);
    },
    curriculumImageUploaded(text){
      this.curriculumImage = text;
    },
    study1ImageUploaded(text){
      this.curriculuminfo.studyImages.study1Image = text;
    },
    study2ImageUploaded(text){
      this.curriculuminfo.studyImages.study2Image = text;
    },
    study3ImageUploaded(text){
      this.curriculuminfo.studyImages.study3Image = text;
    },
    study4ImageUploaded(text){
      this.curriculuminfo.studyImages.study4Image = text;
    },
    removeImage(text){
      (text=="home")?this.homeImage = "":this.toolbarImage="";
      this.showMessageSnakeBar("Image Removed, Please Save Config Data");
    },
    setData() {
        console.log(this.curriculuminfo)
     this.curriculuminfo.curriculumImage=this.curriculumImage;
      this.isAdding = true;
      firebase.firestore
        .collection("config")
        .doc("curriculum")
        .set(this.curriculuminfo)
        // .set({info:this.curriculuminfo})
        .then(() => {
        //   this.setCurri(this.curriculuminfo)
          this.$emit("show", "Curriculum Updated Success");
          this.isAdding = false;
        })
        .catch(e => {
          this.$emit("show", e);
          this.isAdding = false;
          console.log(e);
        });
    },
    getData() {
      this.isLoading = true;
      firebase.firestore
        .collection("config")
        .doc("curriculum")
        .get()
        .then(doc => {
          if (!doc.exists) {
            this.isLoading = false;
            return;
          }
          doc = doc.data();
        //   console.log(doc)
          if (Object.keys(doc).length > 0) {
            this.curriculuminfo = doc;
            this.curriculumImage = doc.curriculumImage||"";
            this.study1Image = doc.studyImages.study1Image||"";
            this.study2Image = doc.studyImages.study2Image||"";
            this.study3Image = doc.studyImages.study3Image||"";
            this.study4Image = doc.studyImages.study4Image||"";
          }
          this.isLoading = false;
        })
        .catch(e => {
          console.log(e);
          this.isLoading = false;
        });
    }
  }
};
</script>